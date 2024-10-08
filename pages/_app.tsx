import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    import("eruda").then((eruda) => eruda.default.init());
  }, []);
  return (
    <>
      <Button />
      <Button2 />
    </>
  );
}
// not working
function Button() {
  return (
    <button
      onClick={async () => {
        try {
          const res = await fetch("https://server-gamma-eosin.vercel.app/api/redirect");
          console.log(res);
        } catch (error) {
          console.log({ error });
        }
      }}
      type="button"
    >
      not working
    </button>
  );
}
// Working
function Button2() {
  return (
    <button
      onClick={async () => {
        try {
          const response: HttpResponse = await CapacitorHttp.get({
            url: "https://server-gamma-eosin.vercel.app/api/redirect"
          });
          console.log(response);
        } catch (error) {
          console.log({ error });
        }
      }}
      type="button"
    >
      Working
    </button>
  );
}
