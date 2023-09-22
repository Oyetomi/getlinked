import {FieldError} from "react-hook-form";

type Props = {
    fieldError: FieldError | undefined;
};
export function ValidationError({ fieldError }: Props) {
    if (!fieldError) {
        return null;
    }
    return (
        <div
            role="alert"
    className="text-red text-xs
    mb-10 -mt-6"
    >
    {fieldError.message}
    </div>
);
}