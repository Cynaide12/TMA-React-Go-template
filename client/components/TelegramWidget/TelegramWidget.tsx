import { useEffect, type FC } from 'react';

interface TelegramWidgetProps {
    Callback: (user: TelegramUser) => void;
}

export interface TelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username?: string;
    photo_url?: string;
    auth_date: number;
    hash: string;
}

export const TelegramWidget: FC<TelegramWidgetProps> = ({ Callback }: any) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.setAttribute('data-telegram-login', 'urktb2_bot');
        script.setAttribute('data-size', 'medium');
        script.setAttribute('data-radius', '10');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        document.getElementById('telegram-login-container')?.appendChild(script);

        (window as any).onTelegramAuth = Callback
    }, []);

    return <div id="telegram-login-container"></div>;
};
