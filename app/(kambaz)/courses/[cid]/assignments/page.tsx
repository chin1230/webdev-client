import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      {/* h3 wd-assignments-title */}
      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
        <AssignmentItem
          cid={cid}
          aid="A1"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Due May 13 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A2"
          title="A2 - CSS"
          details="Multiple Modules | Due May 20 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid} 
          aid="A3"
          title="A3 - JavaScript"
          details="Multiple Modules | Due May 27 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}