import swal from "sweetalert2";

const ShowAlert= {};

ShowAlert.swal = (title,text,icon ) => {
    swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: "OK",
      });
  }

export default ShowAlert;