//
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function Entry(props) {
  const formattedDate = formatDistanceToNow(new Date(props.item.created_at), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <article className="bg-white rounded-md">
      <div className="flex item-center p-2">
        <img
          className="w-8 h-8 mr-3 rounded-full"
          src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg"
          alt="avatar"
        />
        <h3 className="font-bold flex-1">{props.item.owner_name}</h3>
        <div className="text-stone-600 text-sm">{formattedDate}</div>
      </div>
      <div>
        <img
          //src="https://fastly.picsum.photos/id/772/600/600.jpg?hmac=4PCJUoOi2oDQCNivylXqFOoKMOY4Vwp7P-F9SHQsf-c"
          src={props.item.img_url}
          alt="foto"
        />
      </div>
      <div className="p-2">
        <div className="text-sm">like,{Number(props.item.like_count)}</div>
        <div className="font-bold">{props.item.body}</div>
        {/* <div>comentler (opsiyonel)</div> */}
      </div>
    </article>
  );
}
