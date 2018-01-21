const users = {
  1: {
    userId: '123',
    displayName: 'Ken'
  },
  2: {
    userId: '321',
    displayName: 'Ben'
  }
}

export default [
  {
    msgId: '1',
    status: 'send_going',
    msgType: 'text',
    text: 'Hell yeah! #winning',
    isOutgoing: false,
    fromUser: users['1'],
    timeString: '10:01'
  },
  {
    msgId: '2',
    status: 'send_succeed',
    msgType: 'text',
    text: 'Sure Penguin Man!',
    isOutgoing: true,
    fromUser: users['2'],
    timeString: '10:01'
  },
  {
    msgId: '3',
    status: 'send_succeed',
    msgType: 'text',
    text: 'Coffee?',
    isOutgoing: false,
    fromUser: users['1'],
    timeString: '10:00'
  },
  {
    msgId: '4',
    status: 'send_succeed',
    msgType: 'text',
    text: 'My hero ❤️️',
    isOutgoing: true,
    fromUser: users['2'],
    timeString: '10:00'
  },
  {
    msgId: '5',
    status: 'send_succeed',
    msgType: 'text',
    text: 'I once saved a baby penguin 🐧 from drowning',
    isOutgoing: false,
    fromUser: users['1'],
    timeString: '10:00'
  }
]
