import postImage from "../../../assets/images/poster.png";

const PostBody = () => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <div className="flex items-center justify-center overflow-hidden">
        <img className="max-w-full" src={postImage} alt="poster" />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sunt,
        harum atque ea ipsa, neque officiis natus sed quia illum a! Sunt, sed
        totam quam voluptatum autem dicta vitae doloremque dolor nulla illum
        inventore deleniti soluta aut blanditiis ea quae molestiae nobis
        suscipit velit exercitationem atque dolorem. Illo iusto architecto
        itaque ea ipsam eveniet ratione earum inventore hic? Minima, impedit.
      </p>
    </div>
  );
};

export default PostBody;
