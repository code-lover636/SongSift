from bardapi import Bard
import bardapi
import os

def convertQns(text):
    commands = {
        "/song": ["Find me the song name...", "which is the song name...", "what is the song name..."],
        "/lyrics": ["Find me the lyrics...", "which is the lyrics...", "what is the lyrics of the song..."]
    }
    textlst = text.split(" ")
    print(textlst)
    qnsList = []
    if textlst[0].lower() not in commands:
        return False
    for command in commands:
        if command==textlst[0].lower():
            for cm in commands[command]:
                print(text[len(textlst[0]):])
                qnsList.append(cm+text[len(textlst[0]):])
    print(qnsList)
    return qnsList

def find(input_text):
    
    try:
        # set your __Secure-1PSID value to key
        os.environ['_BARD_API_KEY']=""
        bard = Bard(timeout=10)
        # Send an API request and get a response.
        response = bardapi.core.Bard().get_answer(input_text)
        print(response)
        return response['content']
    except: 
        return "Sorry I am unable to respond to that query"

def reply(input_text):
    qnList=convertQns(input_text)
    if not qnList: return "Sorry I am unable to respond to that query. Please use the slash commands"
    for q in qnList:
        text = find(input_text)
        if text != "Sorry I am unable to respond to that query":
            return text
