import { X } from '@assets/icons';
import refs from '@utils/refs';
import { callRef } from 'nixix';

interface NotificationType {
  message: string;
}

export default function Notification({ message }: NotificationType) {
  function removeNotification() {
    refs.notification.current.classList.add('off');
  }

  return (
    <section className="fixed z-30 font-Ember w-full flex justify-end items-center notification" bind:ref={refs.notification} >
      <section className="w-fit button rounded-sm flex mr-2 mt-2">
        <h1 className="text-sm">{message}</h1>
        <div on:click={removeNotification} >
          <X stroke={'burlywood'} stroke:width={2} size={24} />
        </div>
      </section>
    </section>
  );
}
