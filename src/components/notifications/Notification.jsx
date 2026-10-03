import { XMarkIcon } from "@heroicons/react/24/outline";

const Notification = ({ notification, onClose }) => {
  return (
    <div className={`notification notification-${notification.type}`}>
      <p>{notification.message}</p>
      <button
        className="notification-close"
        onClick={() => onClose(notification.id)}
      >
        <XMarkIcon />
      </button>
    </div>
  );
};

export default Notification;
