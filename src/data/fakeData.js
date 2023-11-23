import { v4 as uuidv4 } from "uuid";
import selectedBread from "../assets/빵1.jpeg";

const posts = [
  {
    userId: uuidv4(),
    userName: "dello96",
    breadType: "saltbread",
    postTitle: "잠실에서 가장 맛있는 소금빵",
    postImage: selectedBread,
  },
  {
    userId: uuidv4(),
    userName: "dello",
    breadType: "tart",
    postTitle: "마포구에서 가장 맛있는 소금빵",
    postImage: selectedBread,
  },
  {
    userId: uuidv4(),
    userName: "Bella",
    breadType: "cake",
    postTitle: "장지동에서 가장 맛있는 소금빵",
    postImage: selectedBread,
  },
  {
    userId: uuidv4(),
    userName: "Amos",
    breadType: "salt bread",
    postTitle: "건대에서 가장 맛있는 소금빵",
    postImage: selectedBread,
  },
  {
    userId: uuidv4(),
    userName: "Steve",
    breadType: "cream bread",
    postTitle: "성수동에서 가장 맛있는 소금빵",
    postImage: selectedBread,
  },
];

export default posts;
