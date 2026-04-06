from typing import Union
from .net.environment import Environment
from .sdk import NewCollectionSdk


class NewCollectionSdkAsync(NewCollectionSdk):
    """
    NewCollectionSdkAsync is the asynchronous version of the NewCollectionSdk SDK Client.
    """

    def __init__(
        self, base_url: Union[Environment, str, None] = None, timeout: int = 60000
    ):
        super().__init__(base_url=base_url, timeout=timeout)
