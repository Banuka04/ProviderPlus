from pydantic import BaseModel
from typing import List, Optional

class SearchKeywords(BaseModel):
    keywords: List[str]
    needs_clarification: bool = False
    clarification_question: Optional[str] = None

class SearchQuery(BaseModel):
    user_text: str

class SearchFilter(BaseModel):
    category: str
    keywords: list[str]

class AgentResponse(BaseModel):
    # Conversational logic
    reply_to_user: str
    needs_clarification: bool = False
    clarification_question: Optional[str] = None

    # Search logic
    search_filters: list[SearchFilter]