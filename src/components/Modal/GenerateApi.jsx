import PropTypes from 'prop-types';
import Modal from '../ui/Modal';
import Select from '../ui/Select';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { tokenExpiry } from '../../constant/data';

const schema = yup.object({
  expiry: yup.string().required('Token Expiry is Required'),
});

const GenerateApi = ({ handleClose, active, submitData }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmit = async (data) => {
    await submitData?.(data);
    reset();
    handleClose();
  };

  return (
    <Modal
      title="Generate Api"
      label=""
      labelClass="btn-outline-dark"
      activeModal={active}
      onClose={handleClose}
      themeClass="bg-orange-500 text-white"
      centered={true}
      noFade={false}
      className="max-w-md"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 ">
        <div className="flex flex-col ">
          <Select name={'expiry'} register={register} error={errors.expiry} label={'Api Token Expiry'} options={tokenExpiry} placeholder="Select Token Expiry" isRequired />
          <div className="flex justify-end mt-4">
            <button className="btn btn-primary py-[6px] px-4 rounded-md" type="submit" disabled={isSubmitting}>
              Generate
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default GenerateApi;
GenerateApi.propTypes = {
  active: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitData: PropTypes.func.isRequired,
};
