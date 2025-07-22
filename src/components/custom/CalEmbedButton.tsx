'use client';

import { getCalApi } from "@calcom/embed-react";
import {ReactNode, useEffect} from "react";
import {Button, ButtonProps} from "@/components/ui/button";

const CalEmbedButton = (props: ButtonProps & { children: any }) => {
    const { children } = props;

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            const attrs: any = {"hideEventTypeDetails":false,"layout":"month_view"};
            cal("ui", attrs);
        })();
    }, []);

    return <Button data-cal-namespace="30min"
                   data-cal-link="imixtron/30min"
                   data-cal-config='{"layout":"month_view"}'
                   {...props}
    >{children}</Button>;
};

export default CalEmbedButton;
