import event from "../../assets/images/event.jpeg";
import avatarOne from "../../assets/images/avatar-1.png";
import avatarTwo from "../../assets/images/avatar-2.png";
import avatarThree from "../../assets/images/avatar-3.png";
import avatarFour from "../../assets/images/avatar-4.png";
import avatarFive from "../../assets/images/avatar-5.png";

export function Event() {
  return (
    <div className="w-2/5 pb-2">
      <img
        src={event}
        alt="event name image"
        className="rounded-xl shadow-xl"
      />
      <div className="flex items-center justify-between mt-3">
        <div>
          <h3 className="text-xl uppercase font-medium [letter-spacing:3px]">
            <a
              href="https://www.eventbrite.co.uk/e/gaming-party-tickets-964736210977?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
              target="_blank"
            >
              gaming party
            </a>
          </h3>
          <span className="me-2 text-gray-600 text-sm">20 Aug, 2024</span>-
          <span className="ms-2 text-gray-600 text-sm">+32 Participants</span>
        </div>
        <div className="flex items-center">
          <img
            src={avatarOne}
            alt="avatar one image"
            className="w-10 drop-shadow-md"
          />
          <img
            src={avatarTwo}
            alt="avatar two image"
            className="w-10 -ms-5 drop-shadow-md"
          />
          <img
            src={avatarThree}
            alt="avatar three image"
            className="w-10 -ms-5 drop-shadow-md"
          />
          <img
            src={avatarFour}
            alt="avatar four image"
            className="w-10 -ms-5 drop-shadow-md"
          />
          <img
            src={avatarFive}
            alt="avatar five image"
            className="w-10 -ms-5 drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
