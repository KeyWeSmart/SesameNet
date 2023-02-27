// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nft/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// QueryParamsRequest is request type for the Query/Params RPC method.
type QueryParamsRequest struct {
}

func (m *QueryParamsRequest) Reset()         { *m = QueryParamsRequest{} }
func (m *QueryParamsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryParamsRequest) ProtoMessage()    {}
func (*QueryParamsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{0}
}
func (m *QueryParamsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsRequest.Merge(m, src)
}
func (m *QueryParamsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsRequest proto.InternalMessageInfo

// QueryParamsResponse is response type for the Query/Params RPC method.
type QueryParamsResponse struct {
	// params holds all the parameters of this module.
	Params Params `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
}

func (m *QueryParamsResponse) Reset()         { *m = QueryParamsResponse{} }
func (m *QueryParamsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryParamsResponse) ProtoMessage()    {}
func (*QueryParamsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{1}
}
func (m *QueryParamsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsResponse.Merge(m, src)
}
func (m *QueryParamsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsResponse proto.InternalMessageInfo

func (m *QueryParamsResponse) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

type QuerySupplyRequest struct {
	DenomId string `protobuf:"bytes,1,opt,name=denom_id,json=denomId,proto3" json:"denom_id,omitempty" yaml:"denom_id"`
	Owner   string `protobuf:"bytes,2,opt,name=owner,proto3" json:"owner,omitempty"`
}

func (m *QuerySupplyRequest) Reset()         { *m = QuerySupplyRequest{} }
func (m *QuerySupplyRequest) String() string { return proto.CompactTextString(m) }
func (*QuerySupplyRequest) ProtoMessage()    {}
func (*QuerySupplyRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{2}
}
func (m *QuerySupplyRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QuerySupplyRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QuerySupplyRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QuerySupplyRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QuerySupplyRequest.Merge(m, src)
}
func (m *QuerySupplyRequest) XXX_Size() int {
	return m.Size()
}
func (m *QuerySupplyRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QuerySupplyRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QuerySupplyRequest proto.InternalMessageInfo

func (m *QuerySupplyRequest) GetDenomId() string {
	if m != nil {
		return m.DenomId
	}
	return ""
}

func (m *QuerySupplyRequest) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

type QuerySupplyResponse struct {
	Amount uint64 `protobuf:"varint,1,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (m *QuerySupplyResponse) Reset()         { *m = QuerySupplyResponse{} }
func (m *QuerySupplyResponse) String() string { return proto.CompactTextString(m) }
func (*QuerySupplyResponse) ProtoMessage()    {}
func (*QuerySupplyResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{3}
}
func (m *QuerySupplyResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QuerySupplyResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QuerySupplyResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QuerySupplyResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QuerySupplyResponse.Merge(m, src)
}
func (m *QuerySupplyResponse) XXX_Size() int {
	return m.Size()
}
func (m *QuerySupplyResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QuerySupplyResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QuerySupplyResponse proto.InternalMessageInfo

func (m *QuerySupplyResponse) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func init() {
	proto.RegisterType((*QueryParamsRequest)(nil), "keywesmart.sesamenet.nft.QueryParamsRequest")
	proto.RegisterType((*QueryParamsResponse)(nil), "keywesmart.sesamenet.nft.QueryParamsResponse")
	proto.RegisterType((*QuerySupplyRequest)(nil), "keywesmart.sesamenet.nft.QuerySupplyRequest")
	proto.RegisterType((*QuerySupplyResponse)(nil), "keywesmart.sesamenet.nft.QuerySupplyResponse")
}

func init() { proto.RegisterFile("nft/query.proto", fileDescriptor_ce02d034d3adf2e9) }

var fileDescriptor_ce02d034d3adf2e9 = []byte{
	// 434 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0x3f, 0x6e, 0x14, 0x31,
	0x14, 0xc6, 0x77, 0x56, 0xc9, 0x00, 0xa6, 0x08, 0x72, 0x16, 0x58, 0xad, 0x60, 0x12, 0xb9, 0x42,
	0x90, 0xd8, 0x4a, 0xa0, 0xa2, 0xa0, 0x58, 0x89, 0x82, 0x0e, 0x06, 0xd1, 0xa4, 0x41, 0xde, 0xdd,
	0x97, 0x61, 0xc4, 0xd8, 0xcf, 0x19, 0x7b, 0x08, 0x23, 0x44, 0x83, 0x38, 0x00, 0x12, 0x25, 0x57,
	0xe0, 0x20, 0x29, 0x23, 0xd1, 0x50, 0x45, 0x68, 0x97, 0x13, 0x70, 0x02, 0xb4, 0xb6, 0x97, 0xb0,
	0xa0, 0x28, 0xe9, 0xfc, 0xe7, 0xfb, 0xbe, 0xf7, 0xf3, 0xf3, 0x23, 0x6b, 0x7a, 0xdf, 0x89, 0x83,
	0x06, 0xea, 0x96, 0x9b, 0x1a, 0x1d, 0xd2, 0xfe, 0x6b, 0x68, 0x0f, 0xc1, 0x2a, 0x59, 0x3b, 0x6e,
	0xc1, 0x4a, 0x05, 0x1a, 0x1c, 0xd7, 0xfb, 0x6e, 0xd0, 0x2b, 0xb0, 0x40, 0x2f, 0x12, 0xf3, 0x55,
	0xd0, 0x0f, 0x6e, 0x15, 0x88, 0x45, 0x05, 0x42, 0x9a, 0x52, 0x48, 0xad, 0xd1, 0x49, 0x57, 0xa2,
	0xb6, 0xf1, 0xf6, 0xee, 0x18, 0xad, 0x42, 0x2b, 0x46, 0xd2, 0x42, 0x28, 0x23, 0xde, 0xec, 0x8c,
	0xc0, 0xc9, 0x1d, 0x61, 0x64, 0x51, 0x6a, 0x2f, 0x8e, 0xda, 0x6b, 0x73, 0x14, 0x23, 0x6b, 0xa9,
	0xa2, 0x9b, 0xf5, 0x08, 0x7d, 0x36, 0xf7, 0x3c, 0xf5, 0x87, 0x39, 0x1c, 0x34, 0x60, 0x1d, 0x7b,
	0x41, 0xd6, 0x97, 0x4e, 0xad, 0x41, 0x6d, 0x81, 0x3e, 0x22, 0x69, 0x30, 0xf7, 0x93, 0xcd, 0xe4,
	0xce, 0xd5, 0xdd, 0x4d, 0x7e, 0xd6, 0x4b, 0x78, 0x70, 0x0e, 0x57, 0x8e, 0x4e, 0x36, 0x3a, 0x79,
	0x74, 0xb1, 0xbd, 0x58, 0xec, 0x79, 0x63, 0x4c, 0xd5, 0xc6, 0x62, 0x94, 0x93, 0xcb, 0x13, 0xd0,
	0xa8, 0x5e, 0x96, 0x13, 0x9f, 0x7b, 0x65, 0xb8, 0xfe, 0xeb, 0x64, 0x63, 0xad, 0x95, 0xaa, 0x7a,
	0xc8, 0x16, 0x37, 0x2c, 0xbf, 0xe4, 0x97, 0x4f, 0x26, 0xb4, 0x47, 0x56, 0xf1, 0x50, 0x43, 0xdd,
	0xef, 0xce, 0xc5, 0x79, 0xd8, 0xb0, 0xed, 0x88, 0xbc, 0xc8, 0x8e, 0xc8, 0x37, 0x48, 0x2a, 0x15,
	0x36, 0xda, 0xf9, 0xe8, 0x95, 0x3c, 0xee, 0x76, 0xbf, 0x76, 0xc9, 0xaa, 0xd7, 0xd3, 0x8f, 0x09,
	0x49, 0x03, 0x2d, 0xdd, 0x3a, 0xfb, 0x3d, 0xff, 0x37, 0x69, 0xb0, 0x7d, 0x41, 0x75, 0x20, 0x61,
	0xb7, 0x3f, 0x7c, 0xfb, 0xf9, 0xb9, 0x7b, 0x93, 0x5e, 0x17, 0x7f, 0xb4, 0xe2, 0xf4, 0x3b, 0xe8,
	0x97, 0x84, 0xa4, 0x81, 0xfd, 0x5c, 0x8c, 0xa5, 0xf6, 0x9d, 0x8b, 0xb1, 0xdc, 0x10, 0xf6, 0xc0,
	0x63, 0x70, 0xba, 0xf5, 0x0f, 0xc6, 0x18, 0xab, 0x0a, 0xc6, 0x7e, 0xb0, 0xc4, 0xbb, 0x45, 0xd7,
	0xdf, 0x0b, 0xeb, 0xdd, 0xc3, 0xc7, 0x47, 0xd3, 0x2c, 0x39, 0x9e, 0x66, 0xc9, 0x8f, 0x69, 0x96,
	0x7c, 0x9a, 0x65, 0x9d, 0xe3, 0x59, 0xd6, 0xf9, 0x3e, 0xcb, 0x3a, 0x7b, 0xf7, 0x8a, 0xd2, 0xbd,
	0x6a, 0x46, 0x7c, 0x8c, 0x4a, 0x9c, 0x82, 0xfc, 0x15, 0xfe, 0xd6, 0xc7, 0xbb, 0xd6, 0x80, 0x1d,
	0xa5, 0x7e, 0xe8, 0xee, 0xff, 0x0e, 0x00, 0x00, 0xff, 0xff, 0x6b, 0x81, 0x8f, 0xa2, 0x13, 0x03,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// Queries a list of Supply items.
	Supply(ctx context.Context, in *QuerySupplyRequest, opts ...grpc.CallOption) (*QuerySupplyResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, "/keywesmart.sesamenet.nft.Query/Params", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Supply(ctx context.Context, in *QuerySupplyRequest, opts ...grpc.CallOption) (*QuerySupplyResponse, error) {
	out := new(QuerySupplyResponse)
	err := c.cc.Invoke(ctx, "/keywesmart.sesamenet.nft.Query/Supply", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// Queries a list of Supply items.
	Supply(context.Context, *QuerySupplyRequest) (*QuerySupplyResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Params(ctx context.Context, req *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (*UnimplementedQueryServer) Supply(ctx context.Context, req *QuerySupplyRequest) (*QuerySupplyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Supply not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/keywesmart.sesamenet.nft.Query/Params",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Supply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuerySupplyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Supply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/keywesmart.sesamenet.nft.Query/Supply",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Supply(ctx, req.(*QuerySupplyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "keywesmart.sesamenet.nft.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "Supply",
			Handler:    _Query_Supply_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nft/query.proto",
}

func (m *QueryParamsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryParamsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QuerySupplyRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QuerySupplyRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QuerySupplyRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.DenomId) > 0 {
		i -= len(m.DenomId)
		copy(dAtA[i:], m.DenomId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.DenomId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QuerySupplyResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QuerySupplyResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QuerySupplyResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Amount != 0 {
		i = encodeVarintQuery(dAtA, i, uint64(m.Amount))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryParamsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryParamsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QuerySupplyRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DenomId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QuerySupplyResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Amount != 0 {
		n += 1 + sovQuery(uint64(m.Amount))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryParamsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryParamsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryParamsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryParamsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QuerySupplyRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QuerySupplyRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QuerySupplyRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DenomId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DenomId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QuerySupplyResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QuerySupplyResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QuerySupplyResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			m.Amount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
