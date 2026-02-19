import { Card } from "@packages/ui/src/Card";

export interface EventCardProps {
    title: string;
    date: string;
    children: React.ReactNode;
}

export function EventCard({ title, date, children }: EventCardProps) {
    return (
        <Card variant="glass" className="border-primary/20">
            <div className="mb-4">
                <span className="text-xs text-primary font-bold uppercase">{date}</span>
                <h4 className="font-bold">{title}</h4>
            </div>
            {children}
        </Card>
    );
}
