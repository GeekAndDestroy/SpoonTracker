type ActivityCardProps = {
  task: {
      date: string;
      time_of_day: string;
      task: string;
      spoons_needed: number;
      description: string;
  };
};

export default function ActivityCard({ task }: ActivityCardProps) {
  return (
      <div className="h-28 md:h-48 w-28 md:min-w-48 bg-sky-50 rounded-lg border-gray-300 border-2 p-4">
          <div className="w-full">
              <p className="text-right">{task.time_of_day}</p>
              <h4 className="text-lg font-medium">{task.task}</h4>
              <p className="text-sm font-medium">{task.spoons_needed} spoons consumed</p>
              <p className="text-sm">{task.description}</p>
          </div>
      </div>
  );
}
