from ..data.mock_db import MOCK_PROVIDERS

def specialized_providers(category: str, keywords: list[str]):
    """
    :param category: the broad category of the provider
    :param keywords: categories found by the AI after the initial prompt
    :return: providers that perform the specialized task
    """

    results = []

    for provider in MOCK_PROVIDERS:
        if provider["category"].lower() != category.lower():
            continue

        score = 0
        provider_text = (provider["description"] + " " + " ".join(provider["tags"])).lower()

        for kw in keywords:
            if kw.lower() in provider_text:
                score += 1

        if score > 0 or len(keywords) == 0:
            results.append({**provider, "score": score})

    results.sort(key=lambda x: x["score"], reverse=True)
    return results