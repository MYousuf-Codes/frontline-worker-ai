import type { Message } from "@/components/chat/chat-interface"

export interface AgentResponse {
  content: string
  agentType: "triage" | "guidance" | "booking" | "followup" | "oversight"
  trace: string[]
}

const emergencyKeywords = {
  medical: ["hurt", "pain", "bleeding", "unconscious", "chest pain", "breathing", "heart", "stroke", "overdose"],
  fire: ["fire", "smoke", "burning", "explosion", "gas leak"],
  police: ["crime", "theft", "assault", "domestic", "violence", "suspicious", "break in"],
  mental: ["suicide", "depression", "anxiety", "mental health", "crisis", "self harm"],
  welfare: ["elderly", "neighbor", "wellness check", "missing person", "child", "abuse"],
  utilities: ["power", "water", "gas", "outage", "flooding", "tree down"],
}

const responses = {
  triage: {
    high: [
      "I've assessed your situation as high priority. This requires immediate emergency response.",
      "Based on your description, this is a critical situation that needs urgent attention.",
      "This appears to be a high-priority emergency. I'm coordinating immediate response.",
    ],
    medium: [
      "I've evaluated your situation as moderate priority. We'll get you connected to the right services.",
      "This requires attention but is not immediately life-threatening. Let me route you appropriately.",
      "I've assessed this as a medium-priority situation. We'll ensure you get proper assistance.",
    ],
    low: [
      "I've reviewed your situation. While important, this is not an immediate emergency.",
      "This appears to be a non-urgent matter. I'll help you find the right resources.",
      "I've assessed this as a lower-priority issue. Let me guide you to appropriate services.",
    ],
  },
  guidance: [
    "Based on your situation, I'm connecting you with the most appropriate service.",
    "I've identified the best resources for your specific needs.",
    "Let me guide you to the right department that can help with this situation.",
    "I'm routing your case to the specialized team that handles these matters.",
  ],
  booking: [
    "I'm scheduling an appointment and pre-filling the necessary forms for you.",
    "I've found available slots and am booking you with the appropriate service.",
    "I'm handling the scheduling and paperwork to streamline your experience.",
    "I'm coordinating your appointment and preparing all required documentation.",
  ],
  followup: [
    "I'll set up reminders and follow-up notifications to ensure continuity of care.",
    "I'm establishing a follow-up schedule to monitor your situation.",
    "I'll make sure you receive updates and reminders about your case.",
    "I'm setting up automated check-ins to ensure your needs are met.",
  ],
  oversight: [
    "I'm monitoring service distribution to ensure equitable access across all communities.",
    "I'm tracking resource allocation to maintain fair service delivery.",
    "I'm ensuring this case is handled fairly and efficiently within our system.",
    "I'm monitoring for any bias and ensuring equitable treatment.",
  ],
}

function categorizeEmergency(input: string): { category: string; priority: "high" | "medium" | "low" } {
  const lowerInput = input.toLowerCase()

  // Check for high-priority medical emergencies
  if (
    emergencyKeywords.medical.some((keyword) => lowerInput.includes(keyword)) ||
    lowerInput.includes("911") ||
    lowerInput.includes("emergency")
  ) {
    return { category: "medical", priority: "high" }
  }

  // Check for fire emergencies
  if (emergencyKeywords.fire.some((keyword) => lowerInput.includes(keyword))) {
    return { category: "fire", priority: "high" }
  }

  // Check for police matters
  if (emergencyKeywords.police.some((keyword) => lowerInput.includes(keyword))) {
    return { category: "police", priority: lowerInput.includes("violence") ? "high" : "medium" }
  }

  // Check for mental health crises
  if (emergencyKeywords.mental.some((keyword) => lowerInput.includes(keyword))) {
    return { category: "mental", priority: lowerInput.includes("suicide") ? "high" : "medium" }
  }

  // Check for welfare checks
  if (emergencyKeywords.welfare.some((keyword) => lowerInput.includes(keyword))) {
    return { category: "welfare", priority: "medium" }
  }

  // Check for utilities
  if (emergencyKeywords.utilities.some((keyword) => lowerInput.includes(keyword))) {
    return { category: "utilities", priority: "low" }
  }

  return { category: "general", priority: "low" }
}

function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)]
}

export async function simulateAgentResponse(input: string, previousMessages: Message[]): Promise<AgentResponse> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

  const { category, priority } = categorizeEmergency(input)

  // Determine which agent should respond based on conversation flow
  const agentTypes: Array<"triage" | "guidance" | "booking" | "followup" | "oversight"> = [
    "triage",
    "guidance",
    "booking",
    "followup",
    "oversight",
  ]

  // For first message, always start with triage
  let agentType: "triage" | "guidance" | "booking" | "followup" | "oversight" = "triage"

  if (previousMessages.length > 0) {
    const lastAssistantMessage = previousMessages.filter((m) => m.role === "assistant").pop()

    // Progress through agents based on conversation flow
    if (lastAssistantMessage?.agentType === "triage") {
      agentType = "guidance"
    } else if (lastAssistantMessage?.agentType === "guidance") {
      agentType = "booking"
    } else if (lastAssistantMessage?.agentType === "booking") {
      agentType = "followup"
    } else {
      agentType = agentTypes[Math.floor(Math.random() * agentTypes.length)]
    }
  }

  let content = ""
  const trace: string[] = []

  switch (agentType) {
    case "triage":
      content = getRandomResponse(responses.triage[priority])
      trace.push(`Analyzed input for emergency keywords: ${category}`)
      trace.push(`Assessed priority level: ${priority}`)
      trace.push(`Determined urgency score: ${priority === "high" ? "9/10" : priority === "medium" ? "6/10" : "3/10"}`)
      break

    case "guidance":
      content = getRandomResponse(responses.guidance)
      trace.push(`Matched situation to service category: ${category}`)
      trace.push(`Identified appropriate department: ${category.charAt(0).toUpperCase() + category.slice(1)} Services`)
      trace.push(`Checked service availability: Available`)
      break

    case "booking":
      content = getRandomResponse(responses.booking)
      trace.push(`Searched for available appointments`)
      trace.push(`Found slot: ${new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}`)
      trace.push(`Pre-filled forms with provided information`)
      break

    case "followup":
      content = getRandomResponse(responses.followup)
      trace.push(`Created follow-up schedule`)
      trace.push(`Set reminder notifications`)
      trace.push(`Established care continuity protocol`)
      break

    case "oversight":
      content = getRandomResponse(responses.oversight)
      trace.push(`Analyzed service load distribution`)
      trace.push(`Checked for bias indicators: None detected`)
      trace.push(`Verified equitable resource allocation`)
      break
  }

  // Add specific guidance based on category
  if (agentType === "guidance") {
    switch (category) {
      case "medical":
        content += " I'm connecting you with emergency medical services and the nearest hospital."
        break
      case "fire":
        content += " I'm alerting the fire department and emergency services immediately."
        break
      case "police":
        content += " I'm routing you to the appropriate law enforcement division."
        break
      case "mental":
        content += " I'm connecting you with mental health crisis services and trained counselors."
        break
      case "welfare":
        content += " I'm coordinating with social services and local police for a wellness check."
        break
      case "utilities":
        content += " I'm connecting you with the utility company and city services."
        break
      default:
        content += " I'm finding the most appropriate service for your specific situation."
    }
  }

  return {
    content,
    agentType,
    trace,
  }
}
