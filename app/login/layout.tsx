import { lusitana } from '@/app/ui/fonts';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${lusitana.className} antialiased`}>
            {children}
        </div>
    );
}