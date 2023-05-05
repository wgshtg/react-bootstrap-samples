import {
  Popover as BasePopover,
  Button,
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
} from 'react-bootstrap';

export const Popover = () => {
  const popover = (
    <BasePopover>
      <PopoverHeader>Popover header</PopoverHeader>
      <PopoverBody>Popover body</PopoverBody>
    </BasePopover>
  );

  return (
    <div className='m-3'>
      {/* 當點擊 overlay 範圍以外的地方時，觸發 onHide 事件，一般行為是關閉 overlay 顯示 */}
      <OverlayTrigger overlay={popover} placement='right' trigger='click' rootClose>
        <Button variant='success'>Show popover</Button>
      </OverlayTrigger>
    </div>
  );
};
