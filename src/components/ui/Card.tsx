import type { ReactNode } from "react";
import "./style.css";

interface Iprops {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

const Card = ({ title, description, image, children }: Iprops) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children && <div className="card-footer">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
