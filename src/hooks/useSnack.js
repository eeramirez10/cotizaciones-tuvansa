import { useSnackbar } from "notistack"

export const useSnack = (msg, variant) => {

    const { enqueueSnackbar }  = useSnackbar();

    enqueueSnackbar(msg, { variant })

}
