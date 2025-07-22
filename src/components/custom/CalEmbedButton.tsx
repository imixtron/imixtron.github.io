'use client';

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {text} from "node:stream/consumers";
import {Button} from "@/components/ui/button.tsx";

interface CalEmbedButtonProps {
    btnText: string;
}

export default function CalEmbedButton(props: CalEmbedButtonProps) {
    const { children } = props;

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, []);

    return <Button data-cal-namespace="30min"
                   data-cal-link="imixtron/30min"
                   data-cal-config='{"layout":"month_view"}'
                   {...props}
    >{children}</Button>;
};
