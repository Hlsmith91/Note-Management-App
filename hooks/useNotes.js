import useEntityNoteAttributes from "./entityMethods/useEntityNoteAttributes";
import useEntityNoteChangeLogs from "./entityMethods/useEntityNoteChangeLogs";
import useEntityNotes from "./entityMethods/useEntityNotes";
import useEntityTags from "../hooks/entityMethods/useEntityTags";
import useEntityNoteOnTags from "../hooks/entityMethods/useEntityNoteOnTags";


function useNotes(errorNotificationFn) {
  const {
    data: notesData,
    error: notesDataError,
    createNoteEntity,
    updateNoteEntity,
    deleteNoteEntity,
  } = useEntityNotes("/api/notes", errorNotificationFn);

  const {
    data: noteAttributesData,
    error: noteAttributesDataError,
    updateNotesAttributesEntity,
    deleteNotesAttributesEntity,
  } = useEntityNoteAttributes("/api/noteAttributes", errorNotificationFn);

  const {
    data: noteChangeLogsData,
    error: noteChangeLogsDataError,
    createNoteChangeLogsEntity,
  } = useEntityNoteChangeLogs("/api/noteChangeLogs", errorNotificationFn);

  const{
    data: tagsData,
    error: tagsDataError,
    createTagsAndMerge,
  } = useEntityTags("/api/tags", errorNotificationFn);

  const{
    data: noteOnTagsData,
    error: noteOnTagsDataError,
    updateNoteTags,
    deleteNoteOnTagsByNoteId,
  } = useEntityNoteOnTags("/api/noteOnTags", errorNotificationFn);

  function createNote(title, description, tagIdsIn, tagNamesIn) {
    const noteId = createNoteEntity(title, description);
    createNoteChangeLogsEntity(noteId, "CREATE");
    const tagIds = createTagsAndMerge(tagIdsIn, tagNamesIn);
    updateNoteTags(tagIds, noteId);
  }

  function updateNote(id, title, description, pinned, important, tagIdsIn, tagNamesIn) {
    updateNoteEntity(id, title, description);
    updateNotesAttributesEntity(id, pinned, important);
    createNoteChangeLogsEntity(id, "UPDATE");
    const tagIds = createTagsAndMerge(tagIdsIn, tagNamesIn);
    updateNoteTags(tagIds, id);
  }

  function deleteNote(id) {
    deleteNoteEntity(id);
    deleteNotesAttributesEntity(id);
    deleteNoteOnTagsByNoteId(id);
  }

  return {
    notesData,
    notesDataError,
    noteAttributesData,
    noteAttributesDataError,
    noteChangeLogsData,
    noteChangeLogsDataError,
    tagsData,
    tagsDataError,
    noteOnTagsData,
    noteOnTagsDataError,
    createNote,
    updateNote,
    deleteNote,
  };
}

export default useNotes;
