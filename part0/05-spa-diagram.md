```mermaid
sequenceDiagram
    participant client
    participant server

    client->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    deactivate server

    client->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    deactivate server

    client->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>client: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of client: The client executes the callback function that renders the notes
    ```