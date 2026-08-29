<!DOCTYPE html>
<html>
<head>
    <title>Laravel Reverb Demo</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

<h1>Laravel Reverb Chat</h1>

<input
    type="text"
    id="message"
    placeholder="Enter message"
>

<button onclick="sendMessage()">
    Send
</button>

<ul id="messages"></ul>

<script>

    document.addEventListener('DOMContentLoaded', () => {
        window.Echo.channel('chat').listen('MessageSent', (event) => {

                console.log(event);

                const li = document.createElement('li');

                li.innerText = event.message;

                document
                    .getElementById('messages')
                    .appendChild(li);
            });
    });


    function sendMessage() {

        const message =
            document.getElementById('message').value;

        fetch('/send-message', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':
                document.querySelector(
                    'meta[name="csrf-token"]'
                )?.content
            },

            body: JSON.stringify({
                message: message
            })

        });

    }

</script>

</body>
</html>
