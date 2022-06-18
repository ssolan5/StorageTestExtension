# StorageTestExtension


I make sure to clear the cache and call localstorage.clear(), before each case. 

## Case #1 We are setting the localstorage from the toy website.

Then, when I first load the website the following is the output:
<img width="1060" alt="image" src="https://user-images.githubusercontent.com/1576941/174418931-cce6909b-c91f-498e-8c33-be68037604f5.png">

I reload the website:
<img width="1060" alt="image" src="https://user-images.githubusercontent.com/1576941/174419037-e2ee26be-cc4a-4b58-a666-1bedf9c8196b.png">

This is what shows up on devtools:
<img width="644" alt="image" src="https://user-images.githubusercontent.com/1576941/174418917-c5c1ed81-8e1f-45cc-a0b2-f40b73895bfb.png">


## Case #2 We are setting the localstorage from the toy extension.

### Case #2.1

```chrome.storage.local.set({'user_name': 'localStorage_Extension'});```
<img width="1060" alt="image" src="https://user-images.githubusercontent.com/1576941/174419200-94e8ea1f-afd6-43e6-8135-bed6dfd92811.png">

nothing in devtools: 
<img width="1060" alt="image" src="https://user-images.githubusercontent.com/1576941/174419268-58a0df23-6d52-4c07-bf0d-5a2af3fa6a1a.png">


