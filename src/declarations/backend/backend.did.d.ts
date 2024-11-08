import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Song {
  'title' : string,
  'difficulty' : string,
  'notes' : string,
}
export interface _SERVICE {
  'getSongs' : ActorMethod<[], Array<Song>>,
  'getTechniques' : ActorMethod<[], Array<string>>,
  'getTips' : ActorMethod<[], Array<string>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
