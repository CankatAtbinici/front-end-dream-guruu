import React from "react";
import { Table } from "reactstrap";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserDataContext";
import Swal from "sweetalert2";
import {FaCommentDots} from 'react-icons/fa';

function SingleDiary({ date, title, notes, keys }) {
  const { diaryDreams, setDiaryDreams } = useContext(UserDataContext);

  const notesClickEventHandler = async (event, key) => {
    const selectedDreamData = diaryDreams.find((dreamData) => {
      return dreamData.id === key && dreamData;
    });
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Rüya notunuz",
      inputValue: selectedDreamData.note,
      inputPlaceholder: "Notunuzu bu alana girebilirsiniz",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
      confirmButtonText: "Kaydet",
      confirmButtonColor: "black",
      confirmButtonTextColor: "black",
      cancelButtonText: "Vazgeç",
    });
  };
  const dreamClickEventHadndler = (event, key) => {
    const selectedDreamData = diaryDreams.find((dreamData) => {
      return dreamData.id === key && dreamData;
    });
    Swal.fire({
      text: selectedDreamData.dream,
      confirmButtonText: "Kapat",
      confirmButtonColor: "black",
      title: "Rüya",
    });
  };
  const showDreamAnalizeHandle = (event, key) =>{
    const selectedDreamData = diaryDreams.find((dreamData) => {
      return dreamData.id === key && dreamData;
    });

    Swal.fire({
      text: selectedDreamData.analize ? selectedDreamData.analize : "Bu rüya için analiz bulunamadı",
      confirmButtonText: "Kapat",
      confirmButtonColor: "black",
      title: "Rüyanın yorumu",
    });

  }

  return (
    <section className="dream-diary-container">
    <div className="col-10">
      <Table size="sm">
        <thead>
          <tr>
            <th>Rüya</th>
            <th>Notlar</th>
            <th>Tarih</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {diaryDreams.map((element, index) => {
            return (
              <tr className="pointer">
                <th
                  scope="row"
                  onClick={(event) => {
                    dreamClickEventHadndler(event, element.id);
                  }}
                >
                  {element.dream.slice(0, 40) + "..."}
                </th>
                <td
                  onClick={(event) =>
                    notesClickEventHandler(event, element.id)
                  }
                  key={element.id}
                >
                  {element.note ? (
                    element.note.slice(0, 25) + "..."
                  ) : (
                    <span style={{ fontWeight: "bold" }}>Not ekle</span>
                  )}
                </td>
                <td>{element.date}</td>
                <td onClick={(event)=>showDreamAnalizeHandle(event, element.id)}>
                  <FaCommentDots/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  </section>
  );
}

export default SingleDiary;
