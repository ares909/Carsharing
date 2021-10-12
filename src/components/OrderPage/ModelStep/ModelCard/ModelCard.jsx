import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import useNumberFormat from "../../../../hooks/useNumberFormat";
import { imageUrl } from "../../../../constants/constants";
import styles from "./ModelCard.module.scss";

const ModelCard = ({ car, onClick }) => {
    const selectedCar = useSelector((state) => state.form.selectedCar);
    const { convertNumber } = useNumberFormat();
    const handleClick = () => {
        onClick(car);
    };
    return (
        <div
            onClick={handleClick}
            className={classNames({
                [`${styles.cardContainer}`]: true,
                [`${styles.cardContainerActive}`]: selectedCar.id === car.id,
            })}
        >
            <div className={styles.textContainer}>
                <div className={styles.cardModelText}>{car.name.split(" ").slice(1).join(" ")}</div>
                <div className={styles.cardPriceText}>{`${convertNumber(car.priceMin)} - ${convertNumber(
                    car.priceMax,
                )} ₽`}</div>
            </div>
            <div className={styles.cardImageContainer}>
                <img
                    className={styles.cardImage}
                    src={car.thumbnail.path.includes("files") ? imageUrl + car.thumbnail.path : car.thumbnail.path}
                />
            </div>
        </div>
    );
};
export default ModelCard;
