import {MultiChatWindow, MultiChatSocket, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '7c55ca99-88b5-4160-845f-1801e0788bd7', 
    props.user.username, 
    props.user.secret
    );
  return(
    <div style = {{height: '100vh' }}>
      <MultiChatSocket{...chatProps}/>
      <MultiChatWindow{...chatProps} style = {{ height: '100%'}} />
    </div>
  )   
}

export default ChatsPage