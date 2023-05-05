
```mermaid
sequenceDiagram
    participant client
    participant server

    client->>server: POST "https://studies.cs.helsinki.fi/exampleapp/new_note" --data=note: "Thanks for making this course"
    Note right of client: The client (could be via CLI, Browser, etc), makes a POST request to the server.
    
    server->>server: Server validates data sent.
    deactivate server
    client->>server: GET "https://studies.cs.helsinki.fi/exampleapp/data.json"
    Note right of client: If in browser, the javascript code on main.js will now append the POST-ed note with "ul.appendChild"
```