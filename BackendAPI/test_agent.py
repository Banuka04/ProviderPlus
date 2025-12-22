import app.agents.chat_agent as scoper

if __name__ == "__main__":
    # ==========================================
    # ROUND 1: The Vague Request
    # ==========================================
    print("--- 🔴 ROUND 1: User sends vague input ---")
    user_input_1 = "I want to fix my geyser"
    print(f"User says: '{user_input_1}'")

    # Call the AI
    response_1 = scoper.get_chat_response(user_input_1)

    # Check the result
    if response_1.needs_clarification:
        print("✅ AI successfully paused execution.")
        print(f"🤖 AI Asks: \"{response_1.clarification_question}\"")
    else:
        print("❌ FAILED: AI should have asked for clarification but didn't.")
        print(response_1.keywords)


    # ==========================================
    # ROUND 2: The User Replies "Birthday"
    # ==========================================
    print("\n--- 🟢 ROUND 2: User replies 'Birthday' ---")

    # SIMULATION: Your Mobile App combines the old text + new text
    user_reply = "Birthday"
    combined_input = f"{user_input_1}. {user_reply}"
    print(f"App sends hidden combined context: '{combined_input}'")

    # Call the AI again with the full context
    response_2 = scoper.get_chat_response(combined_input)

    # Check the result
    if not response_2.needs_clarification:
        print("✅ AI accepted the clarification.")
        print(f"Output Keywords: {response_2.keywords}")
    else:
        print("❌ FAILED: AI is still confused.")
        print(f"AI Question: {response_2.clarification_question}")