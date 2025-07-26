import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary p-2 rounded-lg">
        <Clock className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold font-headline">Studypilot</span>
    </div>
  );
}
