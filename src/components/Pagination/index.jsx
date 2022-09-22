import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"

const Pagination = ({onChangePage}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={2}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination