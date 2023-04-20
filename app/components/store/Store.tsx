import { FC, useEffect, useRef, useCallback } from "react"
import { Category } from "../main/category/Category"
import { StoreModal } from "../storeModal/StoreModal"
import { useSelector } from "react-redux"
import { Games } from "./games/Games"

import { RootState } from "@/app/store/store"

export interface PropsHeader {
    setShow: boolean;
}

export const StoreMarket: FC = () => {
    const value = useSelector((state: RootState) => state.button.value);
    const box1Ref = useRef<HTMLDivElement>(null);

    const setTransform = useCallback(() => {
        if (box1Ref.current !== null) {
            box1Ref.current.style.transform = "translate(170px, -500px)";
        }
    }, []);

    useEffect(() => {
        if (value === true) {
            if (box1Ref.current !== null) {
              setTimeout(() => {
                box1Ref.current!.style.transform = "translate(170px, 0)";
              }, 0);
              setTimeout(setTransform, 300);
            }
          } else {
            if (box1Ref.current !== null) {
              setTimeout(() => {
                box1Ref.current!.style.transform = "translate(170px, 0)";
              }, 0);
              setTimeout(() => {
                box1Ref.current!.style.transform = "translate(0, 0)";
              }, 300);
            }
          }
    }, [value, setTransform]);

    return (
        <main style={{backgroundColor: value === true ? "#000000bd" : 'transparent'}}>
            <div className="container">
                <StoreModal setShow={value} />
                <div ref={box1Ref} className='actModStore'>
                    <Category />
                    <Games />
                </div>
            </div>
        </main>
    )
}


