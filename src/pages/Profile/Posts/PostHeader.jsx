import Avatar from "../../../assets/images/avatars/avatar_1.png";
import TimeIcon from "../../../assets/icons/time.svg";
import ThreeDotsIcon from "../../../assets/icons/3dots.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";

const PostHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={Avatar}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">Sumit Saha</h6>
          <div className="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              12 min ago
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <button>
          <img src={ThreeDotsIcon} alt="3dots of Action" />
        </button>

        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={EditIcon} alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={DeleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
