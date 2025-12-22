from fastapi import APIRouter, HTTPException
from ..models.request_models import SearchQuery
from ..agents.chat_agent import get_chat_response
from ..services.specialize_search import specialized_providers

router = APIRouter()

@router.post("/chat")
async def chat_with_ai(query: SearchQuery):
    """
    Entry point for the chat interface.
    Handles both conversation and database searching
    """
    ai_decision = get_chat_response(query.user_text)

    found_providers = []

    if ai_decision.search_filters:
        # processing the first filter
        primary_filter = ai_decision.search_filters[0]

        found_providers = specialized_providers(
            category=primary_filter.category,
            keywords=primary_filter.keywords
        )

    return{
        "ai_reply": ai_decision.reply_to_user,
        "providers": found_providers,
        "search_debug": ai_decision.search_filters
    }
