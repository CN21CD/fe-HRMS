import { Divider, Input, DatePicker, Button, Popconfirm } from 'antd';
import type { DatePickerProps, PopconfirmProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';

const EditUser = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [birthday, setBirthday] = useState<string | string[]>('');
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const nav = useNavigate();

  const onDatePickerChange: DatePickerProps['onChange'] = (
    date,
    dateString
  ) => {
    console.log(date);
    setBirthday(dateString);
  };

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
  };

  return (
    <>
      <Header />
      <div className='bg-primary-light-gray h-screen p-5'>
        <div className='bg-white rounded-[20px] p-5'>
          <p className='font-medium'>Sửa thông tin người dùng</p>
          <Divider />
          <div className='grid grid-cols-4 gap-5'>
            <div className='flex flex-col gap-5'>
              <p>Tên tài khoản*</p>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                size='large'
              />
              <p>Email*</p>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size='large'
              />
            </div>
            <div className='flex flex-col gap-5'>
              <p>Mật khẩu*</p>
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size='large'
              />
              <p>Họ tên*</p>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                size='large'
              />
            </div>
            <div className='flex flex-col gap-5'>
              <p>Ngày sinh*</p>
              <DatePicker
                onChange={onDatePickerChange}
                size='large'
                className='w-full'
                placeholder={'Chọn ngày sinh'}
              />
              <p>Số điện thoại*</p>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                size='large'
              />
            </div>
            <div className='flex flex-col gap-5'>
              <p>Địa chỉ*</p>
              <Input.TextArea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                size='large'
              />
            </div>
          </div>

          <div className='flex mt-5 justify-between'>
            <div>
              <p>* Không được để trống</p>
            </div>
            <div className='flex gap-5'>
              <Button shape='round' onClick={() => nav(-1)}>
                <span>Hủy</span>
              </Button>

              <Popconfirm
                title='Xác nhận lưu'
                description='Đã kiểm tra đầy đủ thông tin và lưu?'
                onConfirm={confirm}
                okText='Lưu'
                cancelText='Hủy'
              >
                <Button type='primary' shape='round'>
                  <span>Lưu</span>
                </Button>
              </Popconfirm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
