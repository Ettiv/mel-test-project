export interface IPaginationPanelProps{
    currentPage: number,
    totalPages: number,
    onClickPage: (page:number)=> void
}