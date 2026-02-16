import { Peer } from 'peerjs';

export class PeerService {
  constructor() {
    this.peer = null;
    this.myPeerId = null;
  }

  initialize(onOpen) {
    // You can use the cloud PeerServer (default) or your own.
    // To use your own, pass configuration object to Peer constructor.
    this.peer = new Peer();

    this.peer.on('open', (id) => {
      this.myPeerId = id;
      console.log('My peer ID is: ' + id);
      if (onOpen) onOpen(id);
    });

    this.peer.on('error', (err) => {
      console.error('PeerJS error:', err);
    });
  }

  callUser(peerId, stream, onStream) {
    const call = this.peer.call(peerId, stream);
    call.on('stream', (remoteStream) => {
      if (onStream) onStream(remoteStream);
    });
    return call;
  }

  answerCall(stream, onStream) {
    this.peer.on('call', (call) => {
      call.answer(stream); // Answer the call with an A/V stream.
      call.on('stream', (remoteStream) => {
        if (onStream) onStream(remoteStream);
      });
    });
  }

  destroy() {
    if (this.peer) {
      this.peer.destroy();
    }
  }
}

export const peerService = new PeerService();
