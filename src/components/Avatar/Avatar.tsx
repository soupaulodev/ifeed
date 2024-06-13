import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({ hasBorder, src, ...props }: AvatarProps) {
  const srcImage =
    src ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={srcImage}
      {...props}
    />
  );
}
