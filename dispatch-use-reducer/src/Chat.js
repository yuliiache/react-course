export default function Chat({contact, message, dispatch}) {
    return (
        <section className="chat">
          <textarea
              value={message}
              placeholder={'Chat to ' + contact.name}
              onChange={(e) => {
                  dispatch({
                      type: 'edited_message',
                      contact: contact,
                      message: e.target.value,
                  })
              }}
          />
          <br />
            <button
                onClick={() => {
                    alert(`To ${contact.email}: "${message}"`)
                    dispatch({
                        type: 'send_message',
                    })
                }}>
                Send to {contact.email}
            </button>
        </section>
    );
}
