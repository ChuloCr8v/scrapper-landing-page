import { FormInstance, message } from "antd";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const IS_DEV = false

const base_url = IS_DEV ? "http://localhost:8000" : "https://scrapper-server-jqyo.onrender.com"


export const getData = async (product: string, setIsLoading: (arg: boolean) => void, form: FormInstance<any>, setData: (arg: any) => void, count: number = 2) => {
    setIsLoading(true);
    await form.validateFields();
    try {
        const res = await axios.post(
            base_url + `/api/products/search/${product}`,
            {
                max_products: count,
            },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        const data = res.data;

        setData(data);
    } catch (error: any) {
        message.error("Unable to fetch data!");
        console.error("Error fetching data:", error.message);
    } finally {
        setIsLoading(false);
        console.log("finished");
    }
};


export const emailData = async (name: string, product: string, form: FormInstance<any>, email: string, setVisible: Dispatch<SetStateAction<boolean>>
) => {
    await form.validateFields();
    try {
        axios.post(
            base_url + "/api/products/send-demo",
            {

                keyword: product,
                name,
                email
            },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        message.success(
            "Your request is being processed and will be sent by email. Please hold on!"
        )

        setVisible(false)

    } catch (error: any) {
        message.error("Unable to fetch data!");
        console.error("Error fetching data:", error.message);
    } finally {
        console.log("finished");
    }
};