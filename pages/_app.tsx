import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    import("eruda").then((eruda) => eruda.default.init());
  }, []);

  return (
    <>
      <Button />
      <Button1 />
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
          const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/redirect");
          console.log(res);
        } catch (error) {
          console.log({ error });
        }
      }}
      type="button"
    >
      Button1
    </button>
  );
}
// not working
function Button1() {
  return (
    <button
      onClick={async () => {
        try {
          const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/redirect", {
            redirect: "manual",
          });
          console.log(res);
        } catch (error) {
          console.log({ error });
        }
      }}
      type="button"
    >
      Button1
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
            url: process.env.NEXT_PUBLIC_API_URL + "/api/redirect",
            disableRedirects: false,
          });
          console.log(response);
        } catch (error) {
          console.log({ error });
        }
      }}
      type="button"
    >
      Button2
    </button>
  );
}
