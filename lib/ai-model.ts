export async function getAIResponse(input: string): Promise<string> {
  const prompt = `You are an AI health companion. Provide a helpful and informative response to the following health-related query: "${input}"`;

  try {
    // Make an HTTP POST request to the backend
    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response || "Sorry, no response was received.";
  } catch (error) {
    console.error("Error fetching AI response from backend:", error);
    return "I'm sorry, I'm having trouble processing your request right now. Please try again later.";
  }
}
