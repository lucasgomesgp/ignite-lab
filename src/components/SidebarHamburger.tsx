import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  menuIsOpened?: boolean;
}

export function SidebarHamburger({ menuIsOpened }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        "bg-gray-700 p-2  border-gray-600 z-[99] top-[4.7rem] left-0 w-full absolute border-t",
        {
          "hidden": !menuIsOpened,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
