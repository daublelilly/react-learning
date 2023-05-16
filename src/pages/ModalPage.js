import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (<div>
    <Button primary onClick={handleClose}>I Accept</Button>
  </div>);

  const modal = (<Modal onClose={handleClose} actionBar={actionBar}>
    <p>Here is an important agreement for you to accept.</p>  
  </Modal>);

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>

      {showModal && modal}

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat lorem. Nulla dictum nibh vel consequat tincidunt. Maecenas sed massa ut neque lacinia consequat. Quisque at dapibus velit. In venenatis consectetur risus, id pulvinar neque. Curabitur venenatis quam ut sapien bibendum, sed sollicitudin nibh faucibus. Praesent at mollis erat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat lorem. Nulla dictum nibh vel consequat tincidunt. Maecenas sed massa ut neque lacinia consequat. Quisque at dapibus velit. In venenatis consectetur risus, id pulvinar neque. Curabitur venenatis quam ut sapien bibendum, sed sollicitudin nibh faucibus. Praesent at mollis erat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat lorem. Nulla dictum nibh vel consequat tincidunt. Maecenas sed massa ut neque lacinia consequat. Quisque at dapibus velit. In venenatis consectetur risus, id pulvinar neque. Curabitur venenatis quam ut sapien bibendum, sed sollicitudin nibh faucibus. Praesent at mollis erat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat lorem. Nulla dictum nibh vel consequat tincidunt. Maecenas sed massa ut neque lacinia consequat. Quisque at dapibus velit. In venenatis consectetur risus, id pulvinar neque. Curabitur venenatis quam ut sapien bibendum, sed sollicitudin nibh faucibus. Praesent at mollis erat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat lorem. Nulla dictum nibh vel consequat tincidunt. Maecenas sed massa ut neque lacinia consequat. Quisque at dapibus velit. In venenatis consectetur risus, id pulvinar neque. Curabitur venenatis quam ut sapien bibendum, sed sollicitudin nibh faucibus. Praesent at mollis erat.</p>
    </div>
  );
}

export default ModalPage;
